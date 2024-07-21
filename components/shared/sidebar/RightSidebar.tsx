import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "../tag/RenderTag";

const RightSidebar = () => {
  const questions = [
    {
      _id: 1,
      title: "How to create a new project?",
    },
    {
      _id: 2,
      title: "Add a new component in the project?",
    },
    {
      _id: 3,
      title: "The project is not running?",
    },
    {
      _id: 4,
      title: "How to deploy the project?",
    },
    {
      id: 5,
      title: "How to setup the environment?",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "React",
      totalQuestions: 10,
    },
    {
      _id: 2,
      name: "Next.js",
      totalQuestions: 5,
    },
    {
      _id: 3,
      name: "Tailwind CSS",
      totalQuestions: 3,
    },
    {
      _id: 4,
      name: "Node.js",
      totalQuestions: 2,
    },
    {
      _id: 5,
      name: "MongoDB",
      totalQuestions: 1,
    },
    {
      _id: 6,
      name: "Express",
      totalQuestions: 10,
    },
    {
      _id: 7,
      name: "JavaScript",
      totalQuestions: 9,
    },
    {
      _id: 8,
      name: "TypeScript",
      totalQuestions: 11,
    },
    {
      _id: 9,
      name: "GraphQL",
      totalQuestions: 5,
    },
    {
      _id: 10,
      name: "Apollo",
      totalQuestions: 1,
    },
  ];

  return (
    <aside
      className="background-light900_dark200 light-border
      custom-scrollbar sticky right-0 top-0 flex h-screen 
      w-[350px] flex-col overflow-auto 
      border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map((question) => (
            <Link
              key={question._id}
              className=" flex cursor-pointer items-center justify-between gap-7"
              href={`/questions/${question._id}`}
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="arrow-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag key={tag._id} {...tag} showCount />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
