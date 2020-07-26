import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'pages');
  const filenames = fs.readdirSync(postsDirectory);

  return {
    props: {
      filenames,
    },
  };
}

export default function Layout(frontMatter) {
  return ({ filenames, children: content }) => {
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        other pages:
        <ul>
          {filenames.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>
        {content}
      </div>
    );
  };
}
