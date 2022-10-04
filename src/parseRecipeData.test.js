import parseRecipeData from './parseRecipeData';

test('parseRecipeData returns expected object', () => {
  const data = {
    name: "Test",
    description: "Test",
    ingredients: ["42", "paprika"],
    directions: ["step1", "step2"]
  };

  const parsedData = parseRecipeData(data);

  expect(parsedData).toEqual({
    title: "Test",
    description: "Test",
    ingredients: [{value: "42"}, {value: "paprika"}],
    directions: [{value: "step1"}, {value: "step2"}]
  });
});