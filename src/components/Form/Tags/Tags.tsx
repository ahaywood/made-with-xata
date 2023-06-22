import { Tag } from '@/components/Tag';
import { useEffect, useState } from 'react';

interface TagsProps {
  onChange: (tags: string[]) => void; // comes from React Hook Form
  value?: string[];
}

const Tags = ({ onChange, value: tags = [] }: TagsProps) => {
  const [input, setInput] = useState('');
  const [inputTags, setInputTags] = useState(tags);

  useEffect(() => {
    onChange(inputTags);
  }, [inputTags, onChange]);

  // when the form changes, check the input and update React Hook Form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const tagExists = (tag: string): boolean => {
    if (!inputTags || inputTags.length < 1) return false;
    if (inputTags.includes(tag)) return true;
    return false;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // get the key
    const { key } = e;
    const trimmedInput = input ? input.trim() : '';

    // when the user hits the comma key
    if (key === ',' && trimmedInput.length && !tagExists(trimmedInput)) {
      e.preventDefault();
      setInputTags((prevState) => [...prevState, trimmedInput]);
      setInput('');
    }

    // when the user hits the backspace key
    if (
      key === 'Backspace' &&
      trimmedInput.length < 1 &&
      inputTags.length > 0
    ) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setInputTags(tagsCopy);
      setInput(poppedTag as string);
    }
  };

  const removeTag = (tagName: string) => {
    const updatedTags = inputTags.filter((tag) => tag !== tagName);
    setInputTags(updatedTags);
  };

  return (
    <div className="flex input items-center gap-x-3 overflow-x-scroll">
      {inputTags &&
        inputTags.map((tag, index) => (
          <div key={index}>
            <Tag name={tag} isXShowing handleClose={() => removeTag(tag)} />
          </div>
        ))}
      <input
        type="text"
        className="flex-1 min-w-[50px]"
        onKeyDown={onKeyDown}
        onChange={handleChange}
        value={input}
      />
    </div>
  );
};

export { Tags };
