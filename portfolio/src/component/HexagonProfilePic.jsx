

import { Avatar } from "@chakra-ui/react";


function HexagonProfilePic({name,src}) {
  return (
    
    <Avatar
      name={name}
      src={src}
        alt="Professional Photo"
       className="home-img aos-init aos-animate"
      css={{
        width: "350px",
        height: "350px",
        position: "relative",
        overflow: "hidden",
        borderRadius:"20px",
        borderRadius: "none",
        clipPath: "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
        WebkitClipPath:
          "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
        backgroundImage:
          "linear-gradient(to right, #caac15, #ff4e50, #f9d423)",
        // add vendor prefixes for Safari support
      }}
      
    />
  );
}

export default HexagonProfilePic;










// import { Avatar } from "@chakra-ui/react";

// function HexagonProfilePic({ name, src }) {
//   return (
//     <span className="chakra-avatar home-img aos-init aos-animate css-19zj214" >
//       <Avatar
//         name={name}
//         src={src}
//         alt="Professional Photo"
//         css={{
//           width: "350px",
//           height: "350px",
//           position: "relative",
//           overflow: "hidden",
//           borderRadius: "20px",
//           borderRadius: "none",
//           clipPath: "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           WebkitClipPath: "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           backgroundImage: "linear-gradient(to right, #caac15, #ff4e50, #f9d423)",
//           // add vendor prefixes for Safari support
//         }}
//       />
//     </span>
//   );
// }

// export default HexagonProfilePic;







// import { Avatar } from "@chakra-ui/react";

// function HexagonProfilePic({ name, src }) {
//   return (
//     <span className="chakra-avatar.home-img.aos-init.aos-animate.css-19zj214">
//       <span
//         css={{
//           width: "350px",
//           height: "350px",
//           position: "relative",
//           overflow: "hidden",
//           borderRadius: "20px",
//           borderRadius: "none",
//           clipPath:
//             "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           WebkitClipPath:
//             "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           backgroundImage: "linear-gradient(to right, #caac15, #ff4e50, #f9d423)",
//           // add vendor prefixes for Safari support
//         }}
//       >
//         <Avatar
//           name={name}
//           src={src}
//           alt="Professional Photo"
//           css={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </span>
//     </span>
//   );
// }

// export default HexagonProfilePic;





// import { Avatar } from "@chakra-ui/react";


// function HexagonProfilePic({ name, src }) {
//   return (
//     <div className="chakra-avatar.home-img.aos-init.aos-animate.css-19zj214">
//       <div
//         css={{
//           width: "350px",
//           height: "350px",
//           position: "relative",
//           overflow: "hidden",
//           borderRadius: "20px",
//           borderRadius: "none",
//           clipPath:
//             "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           WebkitClipPath:
//             "polygon(50% 0%, 91% 26%, 91% 74%, 50% 100%, 9% 74%, 9% 26%)",
//           backgroundImage: "linear-gradient(to right, #caac15, #ff4e50, #f9d423)",
//           // add vendor prefixes for Safari support
//         }}
//       >
//         <Avatar
//           name={name}
//           src={src}
//           alt="Professional Photo"
//           css={{
//             width: "100%",
//             height: "100%",
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default HexagonProfilePic;




