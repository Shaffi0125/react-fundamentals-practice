import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ7qOYYEqsYIiowgL41VfweHewBn1O4zKHg&s",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45 + "$",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkkQhwA-14yQus_rij6VonTP5UT7IrorBkg&s",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 60 + "$",
      location: "Hyderabad, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
      companyName: "Meta",
      datePosted: "10 days ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 50 + "$",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEfxGqbHjyZx6LZ9Mp0PRjXS1BpYvqape8g&s",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70 + "$",
      location: "Pune, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFf8io--ELan4yZyqWVpDWOckW2IzHD8Cfwg&s",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 55 + "$",
      location: "Delhi, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 65 + "$",
      location: "Noida, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZGienm3C6DGAUcplmIzt9n24fgKwf9yYIw&s",
      companyName: "Adobe",
      datePosted: "6 weeks ago",
      post: "Full Stack Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: 48 + "$",
      location: "Chennai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZbCyxmfk0Pjt-cGEIYMIgVV0LlfJbRIIJA&s",
      companyName: "IBM",
      datePosted: "8 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 52 + "$",
      location: "Gurgaon, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaxm6mSzmavKA_ucEpaXmVcgKpEEYs_9OrA&s",
      companyName: "Oracle",
      datePosted: "12 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 58 + "$",
      location: "Bangalore, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KHh-lBH9bztss0bijId0fHdS7Z_ASr13aQ&s",
      companyName: "Salesforce",
      datePosted: "9 weeks ago",
      post: "DevOps Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 62 + "$",
      location: "Kolkata, India",
    },
  ];

  console.log(jobOpenings);

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              logo={elem.brandLogo}
              company={elem.companyName}
              date={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
