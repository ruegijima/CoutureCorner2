import toast from "react-hot-toast";

export default ({ status, message, autoClose }) => {
  console.log(status, message);
  if (status === "error") {
    return toast.error(message, {
      position: "top-center",
      duration: autoClose || 5000,
    });
  } else {
    toast.success(message, {
      position: "top-center",
      duration: autoClose || 5000,
    });
  }
};
