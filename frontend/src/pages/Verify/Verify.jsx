const verifyPayment = async () => {
  try {
    console.log("Verifying payment...");
    const response = await axios.post(url + "/api/order/verify", { success, orderId });
    console.log("Verification response:", response.data);
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    navigate("/");
  }
}

useEffect(() => {
  verifyPayment();
}, []);
