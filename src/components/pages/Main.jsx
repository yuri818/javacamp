import { Carousel } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Bottom from "../footer/Bottom";
import Top from "../header/Top";

function Main({ authService }) {
  let userId = useParams();
  const navigate = useNavigate();
  const onLogout = () => {
    console.log("Main onLogout 호출 성공");
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        // 자바스크립트는 뭔가 있다면 다 true이다.
        navigate("/"); // Login.jsx로 이동
      }
    });
  });
  return (
    <>
      <Top userId={userId} onLogout={onLogout} />
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/camping-goods.jpg"}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/camping-night.jpg"}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/man-person.jpg"}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Bottom />
    </>
  );
}

export default Main;
