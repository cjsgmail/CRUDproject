import "./Contents.css"


function Contents({props, title}){
  const filteredContent = props.filter((el)=> el.title === title)
  
  if(title === undefined){
    return (
      <article>
      <h1>{props[0].title}</h1>
      <div>{props[0].content}</div>
      <div>{props[0].username}</div>
    </article>
    )
  } else{
  return (
    filteredContent.map((el)=>(
      <article>
      <h1>{el.title}</h1>
      <div>{el.content}</div>
      <div>{el.username}</div>
    </article>
    ))
  )
}
}
export default Contents