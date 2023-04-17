import React from 'react';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


export default function Profile() {


  const [user, setUser] = useState(null);
  
  

  const getUser = () => {
    fetch("http://localhost:8080/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject)
        setUser(resObject.user);
        
        
      })
      // .then(data=>{
      //   this.setState ({
      //     data:data
      //   })
      // })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const LocalUser = localStorage.getItem("user");
  console.log(LocalUser);
  console.log(user)

  const naviagte = useNavigate();
  const SignOut = () =>{
    if(user)
    {
      window.open("http://localhost:8080/auth/logout", "_self");
    }
    else if(LocalUser)
    {
      localStorage.clear();
      naviagte("/");
    }
    
  }

  


//     //   {user ? (
//     //     <>
//     //       <h1>{user.userName}</h1>
//     //       <h1>{user.email}</h1>
//     //       <h1>{user.totalProjects}</h1>
//     //       <h1>{user.totalEmployees}</h1>
//     //       <h1>{user.budgets}</h1>
//     //       <h1>{user.totalProjects}</h1>
//     //       <h1>{user.totalOrders}</h1>
//     //     </>
//     //   ): LocalUser ? (
//     //     <>
//     //       <h1>{JSON.parse(LocalUser).userName}</h1>
//     //       <h1>{JSON.parse(LocalUser).email}</h1>
//     //       <h>{JSON.parse(LocalUser).totalProjects}</h>
//     //       <h1>{JSON.parse(LocalUser).totalEmployees}</h1>
//     //       <h>{JSON.parse(LocalUser).budgets}</h>
//     //       <h>{JSON.parse(LocalUser).totalOrders}</h>
//     //     </>
//     //   ): (
//     //     <>
//     //       <h1>Loading User...</h1>
//     //     </>
//     //   )

return (
  
  
    <div>
       {user ? (<>
        <div id='mySidenav' className='sidenav'>
    <p class="logo"><span>HR</span> Management</p>
    <a href="#" class="icon-a"><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
  <a href="#"class="icon-a"><i class="fa fa-users icons"></i> &nbsp;&nbsp;Employees</a>
  <a href="#"class="icon-a"><i class="fa fa-list icons"></i> &nbsp;&nbsp;Projects</a>
  <a href="#"class="icon-a"><i class="fa fa-shopping-bag icons"></i> &nbsp;&nbsp;Orders</a>
  <a href="#"class="icon-a"><i class="fa fa-tasks icons"></i> &nbsp;&nbsp;Inventory</a>
  <a href="#"class="icon-a"><i class="fa fa-user icons"></i> &nbsp;&nbsp;Accounts</a>
  <a href="#"class="icon-a"><i class="fa fa-list-alt icons"></i> &nbsp;&nbsp;Tasks</a>
      
    </div>

    <div id='main'>
      <div class='head'>
      <div class="col-div-6">

<h1  class="navDash"  >&#9776; Dashboard</h1>
</div>

<div class="col-div-6">
    <div class="profile">
<div>
    <h6>{user.userName}</h6>
    
    <h6>{user.email}</h6>
    </div>
            <button className="SearchBtn" onClick={SignOut}> Signout </button>
    </div>
</div>
    <div class="clearfix"></div>
</div>

    <div class="clearfix"></div>
    <br/>
    
    <div class="col-div-3">
        <div class="box">
            <p>{user.totalEmployees}<br/><span>Employees</span></p>
            <i class="fa fa-users box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{user.totalProjects}<br/><span>Projects</span></p>
            <i class="fa fa-list box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{user.budgets}<br/><span>Budgets</span></p>
            <i class="fa fa-shopping-bag box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{user.totalOrders}<br/><span>Orders</span></p>
            <i class="fa fa-tasks box-icon"></i>
        </div>
    </div>
    <div class="clearfix"></div>
    <br/><br/>
    <div class="col-div-8">
        <div class="box-8">
        <div class="content-box">
            <p> Employee Records </p>
            <br/>
            <table>
  <tr>
    <th>FullName</th>
    <th>Email</th>
    <th>Mobile no</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>maryam </td>
    <td>m@gmail.com Anders</td>
    <td>Germany</td>
    <td>Developer</td>
  </tr>
  <tr>
    <td>Samia</td>
    <td>S@gmail.com</td>
    <td>London</td>
    <td>Programmer</td>
  </tr>
  <tr>
    <td>abc</td>
    <td>abc@gmail.com</td>
    <td>Austria</td>
    <td>Manager</td>
  </tr>
  <tr>
    <td>xyx</td>
    <td>xyz@gmail.com</td>
    <td>UK</td>
    <td>CEO</td>
  </tr>
  
  
</table>
        </div>
    </div>
    </div>

    <div class="col-div-4">
        <div class="box-4">
        <div class="content-box">
            <p>Performance</p>

            <div class="circle-wrap">
    <div class="circle">
      <div class="mask full">
        <div class="fill"></div>
      </div>
      <div class="mask half">
        <div class="fill"></div>
      </div>
      <div class="inside-circle"> 70% </div>
    </div>
  </div>
        </div>
    </div>
    </div>
        
    <div class="clearfix"></div>

     
    </div>
       </> ): LocalUser ? (<> <div id='mySidenav' className='sidenav'>
    <p class="logo"><span>HR</span> Management</p>
    <a href="#" class="icon-a"><i class="fa fa-dashboard icons"></i> &nbsp;&nbsp;Dashboard</a>
  <a href="#"class="icon-a"><i class="fa fa-users icons"></i> &nbsp;&nbsp;Employees</a>
  <a href="#"class="icon-a"><i class="fa fa-list icons"></i> &nbsp;&nbsp;Projects</a>
  <a href="#"class="icon-a"><i class="fa fa-shopping-bag icons"></i> &nbsp;&nbsp;Orders</a>
  <a href="#"class="icon-a"><i class="fa fa-tasks icons"></i> &nbsp;&nbsp;Inventory</a>
  <a href="#"class="icon-a"><i class="fa fa-user icons"></i> &nbsp;&nbsp;Accounts</a>
  <a href="#"class="icon-a"><i class="fa fa-list-alt icons"></i> &nbsp;&nbsp;Tasks</a>
      
    </div>

    <div id='main'>
      <div class='head'>
      <div class="col-div-6">

<h1  class="navDash"  >&#9776; Dashboard</h1>
</div>

<div class="col-div-6">
    <div class="profile">
<div>
    <h4>{JSON.parse(LocalUser).userName}</h4>
    
    <h5>{JSON.parse(LocalUser).email}</h5>
    </div>
            <button className="SearchBtn" onClick={SignOut}> Signout </button>
    </div>
</div>
    <div class="clearfix"></div>
</div>

    <div class="clearfix"></div>
    <br/>
    
    <div class="col-div-3">
        <div class="box">
            <p>{JSON.parse(LocalUser).totalEmployees}<br/><span>Employees</span></p>
            <i class="fa fa-users box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{JSON.parse(LocalUser).totalProjects}<br/><span>Projects</span></p>
            <i class="fa fa-list box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{JSON.parse(LocalUser).totalOrders}<br/><span>Orders</span></p>
            <i class="fa fa-shopping-bag box-icon"></i>
        </div>
    </div>
    <div class="col-div-3">
        <div class="box">
            <p>{JSON.parse(LocalUser).budgets}<br/><span>Budgets</span></p>
            <i class="fa fa-tasks box-icon"></i>
        </div>
    </div>
    <div class="clearfix"></div>
    <br/><br/>
    <div class="col-div-8">
        <div class="box-8">
        <div class="content-box">
            <p> Employee Records </p>
            <br/>
            <table>
  <tr>
    <th>FullName</th>
    <th>Email</th>
    <th>Mobile no</th>
    <th>Role</th>
  </tr>
  <tr>
    <td>maryam </td>
    <td>m@gmail.com Anders</td>
    <td>Germany</td>
    <td>Developer</td>
  </tr>
  <tr>
    <td>Samia</td>
    <td>S@gmail.com</td>
    <td>London</td>
    <td>Programmer</td>
  </tr>
  <tr>
    <td>abc</td>
    <td>abc@gmail.com</td>
    <td>Austria</td>
    <td>Manager</td>
  </tr>
  <tr>
    <td>xyx</td>
    <td>xyz@gmail.com</td>
    <td>UK</td>
    <td>CEO</td>
  </tr>
  
  
</table>
        </div>
    </div>
    </div>

    <div class="col-div-4">
        <div class="box-4">
        <div class="content-box">
            <p>Performance</p>

            <div class="circle-wrap">
    <div class="circle">
      <div class="mask full">
        <div class="fill"></div>
      </div>
      <div class="mask half">
        <div class="fill"></div>
      </div>
      <div class="inside-circle"> 70% </div>
    </div>
  </div>
        </div>
    </div>
    </div>
        
    <div class="clearfix"></div>

     
    </div></>):(<><h5>Loading....</h5></>)}
   
    </div>



    )

}


