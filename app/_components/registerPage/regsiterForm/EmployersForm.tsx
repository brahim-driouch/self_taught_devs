import { businessCategories } from "@/constants/businessCategories";
import { useState } from "react";

const EmployersForm = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const handleSpanClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const categ = e.currentTarget.textContent;
    setCategories([]);
    if (categ) {
      setSelectedCategory(categ);
      setCategoryInput(categ);
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryInput(e.target.value || " ");
    loadCategories(e);
  };

  const loadCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();

    if (!inputValue) {
      setCategories([]);
      return;
    }
    const firstLetter = inputValue[0]?.toUpperCase();
    if (!firstLetter || !(firstLetter in businessCategories)) {
      setCategories([]);
      return;
    }
    const selected =
      businessCategories[
        inputValue[0].toUpperCase() as keyof typeof businessCategories
      ] || [];

    if (!selected) return;
    const deeperSelection = selected.filter((cat) =>
      cat.toLowerCase().includes(inputValue.toLowerCase())
    );
    setCategories(deeperSelection);
  };

  return (
    <div className="w-full ">
      <form className="flex flex-col gap-2 relative">
        <input
          className="w-full p-2 border dark:border-gray-700 rounded bg-inherit"
          type="text"
          placeholder="Organization Name"
        />

        {categories && categories.length > 0 && (
          <div className="absolute top-20 left-0 p-2 flex flex-col bg-white w-full">
            {categories.map((cat, index) => (
              <span
                onClick={handleSpanClick}
                className="cursor-pointer hover:bg-gray-50 p-2"
                key={index}
              >
                {cat}
              </span>
            ))}
          </div>
        )}
        <input
          value={categoryInput}
          className="w-full p-2 border dark:border-gray-700 rounded bg-inherit"
          onChange={handleOnChange}
          placeholder="Business category"
        />
        <select className="w-full p-2 border dark:border-gray-700 rounded bg-inherit dark:bg-gray-900">
          <option selected disabled>
            Company size
          </option>
          <option>1-10</option>
          <option>10-50</option>
          <option>50-100</option>
          <option>+100</option>
        </select>
        <input
          className="w-full p-2 border dark:border-gray-700 rounded bg-inherit"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-2 border dark:border-gray-700 rounded bg-inherit"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full p-2 border dark:border-gray-700 rounded bg-inherit"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="w-full p-2 outline-none text-white none rounded bg-blue-500 hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default EmployersForm;
