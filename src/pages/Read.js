import "./Read.css"
import { useState } from "react";
import dummy from "../Data/dummyData";
import Contents from "./Contents";


function Read(){

  const [mode, setMode] = useState(false);
  const [data, setData] = useState(dummy);
  const [title, setTitle] = useState();

  const handleCreateMode = (event) => {
    setMode(!mode)
  }

  const handleFilter = (event) => {
    setTitle(event.target.textContent)
    console.log(event.target.textContent)
  }

  return (
   <div className="list_container">
    <h2>목록</h2>
    <section>
     <div className="table">
      <div className="list_el">
        <div>번호</div>
        <div>제목</div>
        <div>날짜</div>
      </div>
      <ul className="lists">
        <li className="list">
                <div className="list_num"></div>
                <div className="list_message"></div>
                <div className="list_createAt"></div>
        </li>
          {data.map((list)=>{
            return(
              <li className="list" id={list.id} key={list.id} >
                <div className="list_num">{list.id}</div>
                <div className="list_title" value={list.title}  onClick={handleFilter}>{list.title}</div>
                <div className="list_createAt">{new Date(list.createdAt).toLocaleDateString('ko-kr')}</div>
                <button className="delete"></button>
              </li>
            )
          })}
      </ul>
      <button onClick={handleCreateMode}>글쓰기</button>
      {mode? <Create onCreate = {(title, content, username) =>{
        const newlist = {
          id: data.length + 1,
          username: username,
          title: title,
          content: content,
          createdAt: new Date(),
        }
        setData([newlist, ...data])
      }} /> : null}
     </div>
      <Contents props={data} title={title} />
    </section>
    </div>

)}


function Create(props) {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleContent =(event) => {
    setContent(event.target.value)
  }

  const handleClickData = (event) => {
    event.preventDefault();
    props.onCreate(title, username, content);
  }


  return <form className="input_form" onSubmit={handleClickData}>
          <textarea type="text" placeholder="내용을 입력하세요" onChange={handleContent}></textarea>
          <input className="title" type="text" placeholder="제목" onChange={handleTitle}></input>
          <input className="username" type="text" placeholder="당신의 이름은?" onChange={handleUsername}></input>
          <input className="submitBtn" type="submit" ></input>
  </form>
}

export default Read;
