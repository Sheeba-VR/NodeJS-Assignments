import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Button, Link } from "@mui/material";

export default function StandardImageList() {
  return (
      <div style={{marginLeft:"100px"}}>
          <h1>Product Details</h1>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    <div style={{ marginTop: "10px" }}>
    <Button className="product-button"> Add</Button>
    <Button className="product-button"> Edit</Button>
    <Button className="product-button"> Delete</Button>

              <Link href="/MenuBar">{"<Back to Menu>"}</Link>
      </div>


    </div>
    
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/R.c001c6041e04fe49f414a946420c4664?rik=X1ckvR9M5YLg%2fg&riu=http%3a%2f%2fimg.artsadd.com%2fdata%2fuser3%2fdesign%2f20171126%2f328D2B618F415F3AA33FFE8C0A8EAFF4_250x250.jpg&ehk=IS3Q1bhkPykeD1RrKxl2Kd1CwdjAjd5jhPn7nvQ9Hv8%3d&risl=&pid=ImgRaw&r=0',
    title: 'Bag',
  },
  {
    img: 'https://th.bing.com/th/id/R.51ce254b57eadb9fde723887b567147a?rik=cLV1Gs2wYRPNxw&riu=http%3a%2f%2fimg.artsadd.com%2fdata%2fuser1%2fdesign%2f20160930%2f1B7CEAB89BC0E5971BE517C9F16A62F5_250x250.jpg&ehk=LwZ7io%2fo%2bgmywvqLNJnOQoxOvjeUvEG1BVmcLjYO0qU%3d&risl=&pid=ImgRaw&r=0',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://th.bing.com/th/id/R.682c173ce5b9aceac0e97811071a5793?rik=9BWHqT7lEUU%2b1A&riu=http%3a%2f%2fimg.artsadd.com%2fdata%2fuser%2fdesign%2f20151201%2f120EDB30155C1A4B6DF62A1A733CA9C7_250x250.png&ehk=44cXluehrRHmsWAPWhUJHhomD6G%2bVKfUSmzx0R7cpEk%3d&risl=&pid=ImgRaw&r=0',
    title: 'Bag',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://th.bing.com/th/id/R.540411c2c00038aa6b8c9a352ae0e5e5?rik=c68FGac24HUS2g&riu=http%3a%2f%2fwww.seelyoffice.com%2fapplication%2ffiles%2f1314%2f9693%2f4344%2fCustom-Promotional-Products.jpg&ehk=2gCkYHmJdRQpUm1SGgKGeApeeoWCJm%2bRhKAJ4PQAcEg%3d&risl=&pid=ImgRaw&r=0',
    title: 'Cup and Bottle',
  },
  {
    img: 'https://tse3.mm.bing.net/th/id/OIP.FlnDnbHpeeZtehG9IH86PAHaD4?pid=ImgDet&rs=1',
    title: 'Others',
  },
  
];