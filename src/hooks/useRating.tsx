import { useContext } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../api/axios";
import { AuthContext } from "../auth/AuthContext";
import { RATINGS_URL } from "../constants/contsnts";

const useRating = () => {
  const { auth, setLoading } = useContext(AuthContext);

  const createRating = async (
    ratingId: string,
    ratingData: {
      startDate: string;
      endDate: string;
      numGuests: number;
    }
  ) => {
    try {
      await axiosPrivate.post(
        RATINGS_URL + `create_rating/${ratingId}/${auth.id}`,
        ratingData
      );
      toast.success("Rating created successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to create rating");
      setLoading(false);
    }
  };

  const updateRating = async (ratingId: string, newRating: number) => {
    try {
      // Implement your updateRating logic here
      // You can use axiosPrivate to send a request to update the rating
      toast.success("Rating updated successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to update rating");
      setLoading(false);
    }
  };

  const deleteRating = async (ratingId: string) => {
    try {
      // Implement your deleteRating logic here
      // You can use axiosPrivate to send a request to delete the rating
      toast.success("Rating deleted successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to delete rating");
      setLoading(false);
    }
  };

  const getRatingsByHost = async (hostId: string) => {
    try {
      // Implement your getRatingsByHost logic here
      // You can use axiosPrivate to fetch ratings by host
      const response = await axiosPrivate.get(RATINGS_URL + `ratings/${hostId}`);
      return response.data;
    } catch (error) {
      toast.error("Failed to fetch ratings");
      return [];
    }
  };

  return { createRating, updateRating, deleteRating, getRatingsByHost };
};

export default useRating;
