// our-domain.com/new-meetup
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await axios.post("/api/new-meetup", enteredMeetupData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error adding meetup:", error);
    }
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <div className="container mt-4">
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </div>
    </>
  );
}

export default NewMeetupPage;
