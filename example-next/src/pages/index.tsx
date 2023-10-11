import { Post, PostResponse, PostShort } from '@/types';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export const getStaticProps = async () => {
  let response = await fetch("http://localhost:1337/api/posts?populate=*", {
    headers: {
      "Authorization": "Bearer " + process.env.TOKEN
    }
  });
  let postResponse: PostResponse = await response.json();

  let posts: PostShort[] = [];
  for (let post of postResponse.data) {
    const content = await serialize(post.attributes.content);
    posts.push({
      title: post.attributes.title,
      content: content,
      coverImage: post.attributes.cover.data.attributes.formats["large"].url,
      name: post.attributes.author.data.attributes.firstname + " " +  post.attributes.author.data.attributes.lastname
    })
  }
  

  return {
    props: {
      posts,
    }
  }
}



interface HomeProps {
  posts: PostShort[];
}

export default function Home({ posts }: HomeProps) {
  
  return (
    <main>
      {posts.map(post => (
        <div className="bg-white rounded overflow-hidden shadow-lg relative m-10">
        <div className="relative">
          <img
            src={post.coverImage}
            className="w-full max-h-96 object-cover transform"
            alt={post.title}
          />
          <div className="absolute bottom-0 right-0 left-0 p-4">
            <h1 className="text-xl font-semibold text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              {post.title}
            </h1>
            <h2 className="text-base text-gray-300" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              {post.name}
            </h2>
          </div>
        </div>
      
        <div className="p-4">
          <MDXRemote {...post.content} components={{
            h1: ({children}) => (<h1 className="text-xl">{children}</h1>),
            h2: ({children}) => (<h2 className="text-l">{children}</h2>),
            h3: ({children}) => (<h2 className="text-m">{children}</h2>),
            p: ({children}) => (<p className="text-m mt-4">{children}</p>)
          }} />
        </div>
      </div>
          
      ))}
    </main>
  )
}
