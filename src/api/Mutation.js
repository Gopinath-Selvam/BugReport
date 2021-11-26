import {
    gql
} from "@apollo/client";

const ADD_FEEDBACK = gql`
mutation Mutation($feedbackdetails: feedback) {
    addtheFeedback(feedbackdetails: $feedbackdetails)
  }`;

export default ADD_FEEDBACK