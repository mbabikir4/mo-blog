import React from "react";
import JoditEditor from "jodit-react";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Controller } from "react-hook-form";
import { getToken } from "../functions/token";
import { getUser } from "../functions/user";

const BlogEditor = (props) => {
  const user = JSON.parse(getUser());

  const config = {
    uploader: {
      url: "http://localhost:8000/api/upload/jodit/",
      pathVariableName: "localhost:8000",

      headers: { Authorization: getToken() },
      data: { username: user.pk },
      getMessage: function (e) {
        return e.msg;
      },

      isSuccess: function (e) {
        return "success";
      },
      process: function (e) {
        return e;
      },
      // defaultHandlerSuccess: function (e) {
      //   var t = this.j || this;
      //   s.isJoditObject(t) &&
      //     e.files &&
      //     e.files.length &&
      //     e.files.forEach(function (n, r) {
      //       var o =
      //           e.isImages && e.isImages[r] ? ["img", "src"] : ["a", "href"],
      //         i = o[0],
      //         a = o[1],
      //         s = t.createInside.element(i);
      //       s.setAttribute(a, e.baseurl + n),
      //         "a" === i && (s.textContent = e.baseurl + n),
      //         "img" === i
      //           ? t.s.insertImage(s, null, t.o.imageDefaultWidth)
      //           : t.s.insertNode(s);
      //     });
      // },
    },
  };

  return (
    <div>
      <Controller
        name="innerText"
        control={props.control}
        render={({ field }) => <JoditEditor config={config} {...field} />}
      />
    </div>
  );
};

export default BlogEditor;
