import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Like: React.FC = () => {
  const uri: string = "https://porfolio-backend.vercel.app/likes/getLikes";
  const postUri: string = "https://porfolio-backend.vercel.app/likes/updateLikes";

  const [numLike, updateLike] = useState<number>(0);
  const [likeCounter, updateCounter] = useState<number>(0);
  const [btnState, updateBtn] = useState<boolean>(true);
  const [likeClass, updateClass] = useState<string>("far fa-heart");

  useEffect(() => {
    axios
      .get(uri)
      .then((res: any) => {
        updateLike(res.data.data);
        updateBtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickHandler = (): void => {
    updateClass("far fa-heart animate-like");
    updateLike(numLike + 1);
    updateCounter(likeCounter + 1);

    if (likeCounter > 3) {
      updateBtn(true);
    }

    axios
      .post(postUri)
      .then((res: any) => {
        console.log(res.data.status);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      updateClass("far fa-heart");
    }, 500);
  };

  return (
    <Nav.Item className="like-item">
      <Button className="like-btn" onClick={clickHandler} disabled={btnState}>
        <i className={likeClass} style={{ color: "#fb6fcd" }}></i> {numLike}
      </Button>
    </Nav.Item>
  );
};

export default Like;