import React from "react";
import java from "../experience/java.png";
import springboot from "../experience/springboot.jpeg";
import springcloud from "../experience/springcloud.png";
import springsecurity from "../experience/springsecurity.png";
import jpaAndHibernate from "../experience/hibernate.svg";
import mysql from "../experience/mysql.png";
import mongodba from "../experience/mongodb.png";
import react from "../experience/react.png";
import redis from "../experience/redis.png";
import rabbitmq from "../experience/rabbitmq.jpeg";
import kafka from "../experience/kafka.jpeg";
import aws from "../experience/aws.png";
import restful from "../experience/restapi.png";
import microservice from "../experience/microservices.jpeg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: springcloud,
      title: "Spring Cloud",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: springsecurity,
      title: "Spring Security",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: jpaAndHibernate,
      title: "JPA & Hibernate",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: mongodba,
      title: "MongoDB",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: redis,
      title: "Redis",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: rabbitmq,
      title: "RabbitMQ",
      style: "shadow-blue-500",
    },
    {
      id: 11,
      src: kafka,
      title: "Kafka",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: aws,
      title: "AWS",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked on</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto"></img>
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
