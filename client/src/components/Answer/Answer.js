import React from "react";
import { useQuery } from '@apollo/client';
import { GET_ONE_ANSWER } from '../utils/queries';

const Answer = (props) => {
    // TODO: get the data from the server, return only the text of a RANDOM answer from that category
    // How to get randomly, only 1 answer returned from Mongo? 
    const { data } = useQuery(GET_ONE_ANSWER);
    const getAnswers = () => {
        return "blah";
    }
    const answer = data?.getAnswers();

    return (
        <>
            <p>{answer.text}</p>
        </>
    )
}

export default Answer;