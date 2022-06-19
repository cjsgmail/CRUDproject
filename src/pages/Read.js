import "./Read.css"
import { useState } from "react";
import dummy from "../Data/dummyData";
import Contents from "./Contents";
import Create from "./Create";


function Read(){

  const [mode, setMode] = useState(false);
  const [data, setData] = useState(dummy);
  const [id, setId] = useState(null);
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  const handleCreateMode = (event) => {
    setMode(!mode)
  }

  const handleFilter = (event) => {
    setId(event.target.id)
  }

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
    event.preventDefault()
    onCreate(title, username, content)
  }

  const onCreate = (title, content, username) => {
    const newlist = {
      id: data.length + 1,
      username: username,
      title: title,
      content: content,
      createdAt: new Date(),
    }
    setData([newlist, ...data])
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
              <li className="list" key={list.id}>
                <div className="list_num">{list.id}</div>
                <div className="list_title" value={list.title} id={list.id} onClick={handleFilter}>{list.title}</div>
                <div className="list_createAt">{new Date(list.createdAt).toLocaleDateString('ko-kr')}</div>
              </li>
            )
          })}
      </ul>
      <button onClick={handleCreateMode}>글쓰기</button>
      {mode? <Create handleUsername={handleUsername} handleTitle={handleTitle} handleContent={handleContent} handleClickData={handleClickData}/>
      : null}
     </div>
      <Contents props={data} dataid = {id} />
      <button className="delet" value="delete" onClick={()=>{
        const newData = [];
        for(let i = 0; i < data.length; i++){
          if(`${data[i].id}` !== id){
            newData.push(data[i]);
          }
        }
        setData(newData);
      }}
      >삭제</button>
    </section>
    </div>

)}


export default Read;
