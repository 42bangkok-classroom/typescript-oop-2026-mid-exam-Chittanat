const comment = "TypeScript is a strongly typed programming language"


export function shortenComment(comment: string) {
  // Write your code below
  const text = comment.split(' ')
  const process:string[]=  text.filter(f=>f.length >=5 && f.length <=10 );
  return process
}