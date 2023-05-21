import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blog");

  return (
    <div className=" my-Container  my-20 t">
      <div>
        <h3 className="text-xl font-medium">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h3>
        <div>
          <p className="text-normal">
            <strong>Access token</strong> access token that allows the user to
            access his data.
          </p>
          <p>
            <strong>refresh token</strong> A refresh token is a special token
            that is used to obtain additional access tokens. This allows user to
            have short-lived access tokens without having to collect credentials
            every time one expires..
          </p>
          <p>
            <strong> work access token and refresh token</strong> To refresh
            your access token as well as an ID token, you send a token request
            with a grant_type of refresh_token . Be sure to include the openid
            scope when you want to refresh the ID token. If the refresh token is
            valid, then you get back a new access and the refresh token.
          </p>
          <p>we shod save it in cookies storage</p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-medium">
          2.Compare SQL and NoSQL databases?
        </h3>
        <div>
          <p className="text-normal">
            <strong>SQL DATABASE</strong> SQL databases are vertically scalable.
            SQL databases are table-based.SQL databases are better for multi-row
            transactions.
          </p>
          <p>
            <strong>SQL DATABASE</strong> NoSQL databases are horizontally
            scalable. oSQL databases are document, key-value, graph, or
            wide-column stores. NoSQL is better for unstructured data like
            documents or JSON.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-medium">
          3. What is express js? What is Next JS?
        </h3>
        <div >
          <p className="text-normal">
            <strong>express js</strong> Express.js is a fast, minimalistic, and
            flexible web application framework for Node.js. It provides a robust
            set of features and tools for building web servers and APIs. With
            Express.js, developers can define routes, handle HTTP requests and
            responses, manage middleware, and implement various functionalities
            to create scalable and modular web applications. It is widely used
            in the Node.js ecosystem due to its simplicity, extensibility, and
            widespread community support.
          </p>
          <p className="text-normal">
            <strong>Next js</strong> Next.js is a front-end framework that makes
            it easy to build fast websites with React—which is a free and
            open-source front-end JavaScript library for building user
            interfaces based on UI components. Being one of the most popular
            front-end frameworks, React has become a developer favorite.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-medium">
          4. What is MongoDB aggregate and how does it work?
        </h3>
        <div className="mt-5">
          <p className="text-normal">
            <strong> MongoDB aggregate is</strong> What is Aggregation in
            MongoDB? Aggregation is a way of processing a large number of
            documents in a collection by means of passing them through different
            stages. The stages make up what is known as a pipeline. The stages
            in a pipeline can filter, sort, group, reshape and modify documents
            that pass through the pipeline.
          </p>
          <p className="text-normal">
            <strong>MongoDB aggregate is working </strong> MongoDB's aggregate function allows for
            advanced data aggregation and processing operations. It takes a
            collection of documents as input, applies a set of pipeline stages
            to transform and manipulate the data, and returns the aggregated
            result. This enables powerful operations like grouping, filtering,
            sorting, and performing computations on data stored in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
