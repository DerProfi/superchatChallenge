import axios from "axios";

export const api = async (sum) => {
    const postSum = {
        "sum": sum
    }
    try {
      const response = await axios.post(
        `https://superchat-challenge-numbers.free.beeceptor.com/sum`, postSum);
      console.log(response)
    } catch (err) {
      console.log(err);
    }
};
