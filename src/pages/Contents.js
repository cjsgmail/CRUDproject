import "./Contents.css"
import { useState } from "react";

function Contents({props, dataid}){
  const filteredContent = props.filter((el)=>(`${el.id}` === dataid))
  const [mode, setMode] = useState(false);
 
  
  const handleMode = (event) => {
    setMode(!mode);
  }


  if(dataid === null){
    return (
      <article>
      <h1>{props[0].title}</h1>
      <div>{props[0].content}</div>
      <div>{props[0].username}</div>
      <button onClick={handleMode}>수정하기</button>
      { mode? <Update pros={props} /> : null}
    </article>
    )
  } else {
    return (
      filteredContent.map((el)=>(
        <article key={el.id}>
        <h1>{el.title}</h1>
        <div>{el.content}</div>
        <div>{el.username}</div>
        <button onClick={handleMode}>수정하기</button>
        { mode? <Update filteredContent={filteredContent} /> : null}
      </article>
      ))
    )
  }
}

function Update({filteredContent, props}){
  
  const [title, setTitle] = useState(filteredContent[0].title);
  const [content, setContent] = useState(filteredContent[0].content);
  const [username, setUsername] = useState(filteredContent[0].username);
  const [updateData, setUpdateData] = useState(filteredContent);

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  
  const handleContent = (e) => {
    setContent(e.target.value)
  }
  
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const onSubmit= (e) => {
    e.preventDefault()
    onUpdate()
  }

  const onUpdate = (title, content, username) => {
    const newList = {
      id: filteredContent[0].id,
      username: username,
      title: title,
      content: content,
      createdAt: new Date(),
    }
    for(let i = 0; i < updateData.length; i++){
      if(updateData[i].id === filteredContent[0].id){
        updateData[i] = newList;
        break;
      }
    }
    setUpdateData(updateData);
  }

  if(filteredContent[0].id !== null){
    return (
      filteredContent.map((el)=>(
      <form className="input_form" key={el.id} onSubmit={onSubmit}>
            <textarea type="text" placeholder="내용을 입력하세요"  value={content} onChange={handleContent}></textarea>
            <input className="title" type="text" placeholder="제목" value={title} onChange={handleTitle}></input>
            <input className="username" type="text" placeholder="당신의 이름은?" value={username} onChange={handleUsername}></input>
            <input className="submitBtn" type="submit"  value="수정하기"></input>
    </form>
    )))
  } else {
  return (
    props.map((el)=>(
    <form className="input_form" key={el.id}>
          <textarea type="text" placeholder="내용을 입력하세요"  value={content} onChange={handleContent}></textarea>
          <input className="title" type="text" placeholder="제목" value={title} onChange={handleTitle}></input>
          <input className="username" type="text" placeholder="당신의 이름은?" value={username} onChange={handleUsername}></input>
          <input className="submitBtn" type="submit"  value="수정하기"></input>
  </form>
  )))}}
export default Contents