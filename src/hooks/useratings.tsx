import { useContext } from "react";
import { toast } from "react-toastify";
import axiosPrivate from "../api/axios";
import { AuthContext } from "../auth/AuthContext";
import { RATINGS_URL } from "../constants/contsnts";

class UseRating {
    constructor() {
        this.authContext = useContext(AuthContext);
      }
    
      async createRating(hostId, guestId, value) {
        try {
          this.authContext.setLoading(true); // Postavite loading stanje na true
          await axiosPrivate.post(RATINGS_URL + "create", {
            hostId,
            guestId,
            value,
          });
          toast.success("Rating created successfully");
        } catch (error) {
          toast.error("Failed to create rating");
        } finally {
          this.authContext.setLoading(false); // Vratite loading stanje na false
        }
      }
    

  async updateRating(ratingId: string, value: any, comment: any) {
    try {
      await axiosPrivate.put(RATINGS_URL + "update/" + ratingId, {
        value,
        comment,
      });
      toast.success("Rating updated successfully");
      this.authContext.setLoading(false);
    } catch (error) {
      toast.error("Failed to update rating");
      this.authContext.setLoading(false);
    }
  }

  async deleteRating(ratingId: string) {
    try {
      await axiosPrivate.delete(RATINGS_URL + "delete/" + ratingId);
      toast.success("Rating deleted successfully");
      this.authContext.setLoading(false);
    } catch (error) {
      toast.error("Failed to delete rating");
      this.authContext.setLoading(false);
    }
  }
}

export default UseRating;
