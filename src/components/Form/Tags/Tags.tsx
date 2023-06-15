import { Tag } from '@/components/Tag';
import { useState } from 'react';

interface TagsProps {
  tags: Tag[];
}

const Tags = ({ tags = [] }: /* props */ TagsProps) => {
  const [input, setInput] = useState('');
  const [inputTags, setInputTags] = useState(tags);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const tagExists = (tag: string): boolean => {
    if (!inputTags || inputTags.length < 1) return false;
    if (inputTags.filter((item: Tag) => item.name === tag)) return true;
    return false;
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const trimmedInput = input ? input.trim() : '';
    console.log({ key, trimmedInput, inputTags });

    if (key === ',') {
      console.log('hit comma');
    }

    // when the user hits the comma key
    if (key === ',' && trimmedInput.length && !tagExists(trimmedInput)) {
      e.preventDefault();
      const newTag = {
        id: inputTags.length.toString(),
        name: trimmedInput,
      } as Tag;
      setInputTags((prevState) => [...prevState, { ...newTag }]);
      setInput('');
    }

    // when the user hits the backspace key
    if (
      key === 'Backspace' &&
      trimmedInput.length < 1 &&
      inputTags.length > 0
    ) {
      console.log('hit backspace');
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setInputTags(tagsCopy);
      console.log({ poppedTag });
      setInput(poppedTag?.name as string);
    }
  };

  const removeTag = (id: string) => {
    const updatedTags = inputTags.filter((tag) => tag.id !== id);
    setInputTags(updatedTags);
  };

  return (
    <div className="flex input items-center gap-x-3">
      {tags &&
        inputTags.map((tag) => (
          <div key={tag.id}>
            <Tag
              name={tag.name}
              isXShowing
              handleClose={() => removeTag(tag.id)}
            />
          </div>
        ))}
      <input
        type="text"
        className="flex-1"
        onKeyDown={onKeyDown}
        onChange={onChange}
        value={input}
      />
    </div>
  );
};

export { Tags };
