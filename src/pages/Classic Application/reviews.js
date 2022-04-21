import React, { Component } from "react";
import { Container } from "reactstrap";

//Import Images
import img1 from "../../assets/images/client/01.jpg";
import img2 from "../../assets/images/client/02.jpg";
import img3 from "../../assets/images/client/03.jpg";
import img4 from "../../assets/images/client/04.jpg";
import img5 from "../../assets/images/client/05.jpg";
import img6 from "../../assets/images/client/06.jpg";

//Import Components
import FeatureTitle from "./FeatureTitle";
import ReviewsSlider from "../../components/Shared/ReviewsSlider";

class Reviews extends Component {
  state = {
    reviews: [
      {
        id: 1,
        img: img1,
        name: "Thomas Israel",
        post: "C.E.O",
        desc:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.",
        rating: 5,
      },
      {
        id: 2,
        img: img2,
        name: "Barbara McIntosh",
        post: "M.D",
        desc:
          "One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.",
        rating: 4,
      },
      {
        id: 3,
        img: img3,
        name: "Carl Oliver",
        post: "P.A",
        desc:
          "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
        rating: 3,
      },
      {
        id: 4,
        img: img4,
        name: "Christa Smith",
        post: "Manager",
        desc:
          "According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero.",
        rating: 5,
      },
      {
        id: 5,
        img: img5,
        name: "Dean Tolle",
        post: "Developer",
        desc:
          "There is now an abundance of readable dummy texts. These are usually used when a text is required.",
        rating: 5,
      },
      {
        id: 6,
        img: img6,
        name: "ill Webb",
        post: "Designer",
        desc:
          "Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts.",
        rating: 4,
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60 pb-md-5 mb-md-5">
          {/* feature title */}
          <FeatureTitle
            maintitle="Reviews"
            title="What our users says!"
            desc="that can provide everything you need to generate awareness, drive traffic, connect."
            badgeColor="success"
          />

          {/* clients slider */}
          <ReviewsSlider reviews={this.state.reviews} colClass="mt-4" />
        </Container>
      </React.Fragment>
    );
  }
}

export default Reviews;
