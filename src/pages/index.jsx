import React from "react";
import ReactMarkdown from "react-markdown";

const IndexPage = () => {
    return (
        <>
            <p>
                <ReactMarkdown>
                    {"[Jason Stanley](https://en.wikipedia.org/wiki/Jason_Stanley) is an American philosopher who is the Jacob Urowsky Professor of Philosophy at Yale University. He is best known for his contributions to philosophy of language and epistemology, which often draw upon and influence other fields, including linguistics and cognitive science."}
                </ReactMarkdown>
            </p>
            <p>
                <a href="https://upload.wikimedia.org/wikipedia/commons/f/f0/Jason_Stanley.jpg">
                    Photo
                </a>
            </p>
        </>
    );
};

export default IndexPage;