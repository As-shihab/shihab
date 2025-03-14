import React, { useEffect, useState } from "react";
import { http } from "../../../http/http";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BiComment, BiLike, BiShare } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import LoadingImg from "../../../assets/loader.gif";
import { path } from "../../../lib/path";
import Card_Loader from "../../../lib/card_loader";
export default function PinedBlog() {
  const [pined, setBlogs] = useState("");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    PinedBlog();
  }, []);

  const PinedBlog = async () => {
    setLoader(true);
    await http.get("shihab/pinedblog").then((res) => {
      setBlogs(res.data.data);
      setLoader(false);
    });
  };

  console.log(pined);
  return (
    <div className="text-center mt-24 my-3 ">
      <b className="text-3xl font-semibold  text-sky-400">
        {" "}
        <span className="text-orange-400">PINED</span> -Blogs
      </b>

      <div className={loader?`` : `grid grid-cols-1 gap-3 md:grid-cols-2 mt-9 lg:grid-cols-3`}>
        {!loader ? (
          Object.values(pined).map((blog) => {
            return (
              <div key={blog._id}>
                <div className="border p-2 shadow-sm flex flex-col border-slate-800 h-auto bg-slate-800  rounded-lg">
                  <LazyLoadImage
                    src={blog.imgid ? path + blog.imgid : LoadingImg}
                    effect="blur"
                    className="rounded-lg h-52 bg-cover overflow-hidden w-full size-fit"
                  
                    alt={blog.blogfile}
                  />
                  <Link
                    to={`/Blogs/viewblog/` + blog._id}
                    className="text-left py-1"
                  >
                    <span className="text-gray-200 my-1 text-left w-full cursor-pointer hover:text-sky-300">
                      {blog.title ? blog.title : "No paragraph found"}
                    </span>
                  </Link>

                  <div className="border-t border-slate-700 mx-3 text-xl lg:text-2xl py-2 flex items-center justify-around ">
                    <div className="flex items-center gap-1">
                      {" "}
                      <BiLike className="cursor-pointer animate-bounce text-3xl text-fuchsia-500" />{" "}
                      <span className="text-green-400 text-xs">232</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {" "}
                      <BiComment className="cursor-pointer text-sky-500" />{" "}
                      <span className="text-green-400 text-xs">232</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {" "}
                      <IoMdEye className="cursor-pointer text-orange-400" />{" "}
                      <span className="text-green-400 text-xs">232</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {" "}
                      <BiShare className="cursor-pointer text-cyan-400" />{" "}
                      <span className="text-green-400 text-xs">232</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="grid gap-4 mt-5 w-[95%] m-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />
            <Card_Loader />

          </div>
        )}
      </div>
    </div>
  );
}
