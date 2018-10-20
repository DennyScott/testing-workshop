// avoid monkey-patching with jest.mock
import thumbWar from '../thumb-war'
import * as utils from '../utils';

jest.mock('../utils', () => ({
  getWinner: jest.fn((p1, p2) => p2),
}));
// add an inline mock with the jest.mock API
//
// jest.mock(
//   relativePathToModuleToMock,
//   functionThatReturnsMockObject
// )
//
// (Hint #1)

test('returns winner', () => {
  utils.getWinner.mockImplementation((p1, p2) => p2)

  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  utils.getWinner.mock.calls.forEach(args => {
    expect(args).toEqual(['Ken Wheeler', 'Kent C. Dodds'])
  })

  // remove the next line
  utils.getWinner.mockRestore()
})

/*
Hint below:














































jest.mock('../utils', () => {
  return {
    // ...
    // see answer in the solution file
  }
})

 */
