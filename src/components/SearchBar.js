import { useEffect, useState } from "react";

function SearchBar() {
  const options = ["some text", "some text", "some text"];

  const [recommendations, setRecommendations] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //if not searching for anything
    if (searchText.length === 0) {
      setRecommendations([]);
    }

    //else if input
    else if (searchText.length > 0) {
      const newRecords = options.filter((name) =>
        name.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecommendations(newRecords);
    }
  }, [searchText]);

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <h2>Recommendations:</h2>
      <ul>
        {recommendations.map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
