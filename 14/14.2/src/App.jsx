import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import AvatarList from "./Components/AvatarList";
import SearchInput from "./Components/SearchInput";
import SearchButton from "./Components/searchButton";

function App() {
  const url = "https://randomuser.me/api";
  const [avatarList, setAvatarList] = useState([]);
  const [searchList, setSearchList] = useState(); // save the list when searching

  useEffect(() => {
    avatarList.length < 10 ? fetchData() : console.log(avatarList);
  }, [avatarList]);

  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    const user = data.results[0];
    const temp = {
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      avatar: user.picture.thumbnail,
      email: user.email,
      age: user.dob.age,
      country: user.location.country,
    };
    setAvatarList((prev) => [...prev, temp]);
  }

  function inputHandle(e) {
    setSearchList(
      avatarList.filter((user) =>
        user.name.toLowerCase().includes(e.target.value)
      )
    );
  }
  return (
    <>
      <SearchInput inputHandle={inputHandle} />
      <SearchButton />
        <AvatarList avatarList={searchList ? searchList : avatarList} />
    </>
  );
}

export default App;
