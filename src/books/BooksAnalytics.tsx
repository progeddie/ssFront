import { ViewedBook } from "../types/book";
import { Link } from "react-router-dom";

interface BooksAnalyticsProps {
  viewedBooks: ViewedBook[];
  resetBooks: () => void;
}

const BooksAnalytics: React.FC<BooksAnalyticsProps> = ({
  viewedBooks,
  resetBooks,
}) => {
  if (!viewedBooks.length) {
    return <p>No books viewed yet</p>;
  }

  const reversed = [...viewedBooks].reverse();

  return (
    <>
      <h2>Viewed Books</h2>
      <div>
        <Link to="" onClick={() => resetBooks()}>
          Reset
        </Link>
      </div>
      <ul>
        {reversed.map(({ author, title, isbn, timestamp }) => (
          <li key={`${isbn}-${timestamp}`}>
            <b>
              {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}
            </b>{" "}
            - {author} - {title} - <i>{isbn}</i>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BooksAnalytics;
