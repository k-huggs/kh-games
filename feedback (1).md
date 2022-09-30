# NC Games Front End - Kyle Huggins (17/01/2022)

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)
- [ ] It's probably a good idea to "un-nest" your file structure so that everything in the `kh-games` directory is moved to the root of the repo

## UX

- [ ] Remove the side-scroll on narrower screens. Looks like this is caused by left & right margin on the review cards
- [x] At some screen widths, the register / login buttons overlap with the other links or cause the navbar to be wider than the screen
- [ ] The menu button doesn't seem to work for me?
- [ ] Set a max-width for text (too wide and it can bee difficult to read) - Users Page
- [x] Loading spinner in comments section shifts items out of place
- [x] Clear the `textarea` after successful posting of a comment
- [ ] Disable form controls while loading is taking place
- [x] Add `required` to `textarea` to prevent form submission before adding comment text
- [x] Indicate which way the user has voted
- [ ] Keep aspect ratio of (or crop) images to avoid them looking "warped"
- [ ] Remove next / prev buttons until they're implemented fully
- [ ] Refreshing doesn’t cause an issue on sub-pages (check this once hosted)
- [ ] Remove any errors / warnings / logs in the browser & node consoles
- [ ] Posts / Deletions happen instantly _OR_ give user indication of loading

## Functionality

### Login

- [x] Remove the password field from the login
- [x] Make it easy for someone who has no knowledge of the project to log in (could have default username filled into username input)
- [x] Hide "register" button once logged in
- [x] Make a network request to `/api/users/:username` and if user exists, add user object to state

### Reviews

- [ ] Reuse the reviews UI for the categories pages (and maybe user page too?)
- [ ] You've made a beautiful `useReviews` hook and then filtered based on category! Don't filter reviews on the client-side

## Error Handling

- [x] Nice 404 page 😂 - check the styling on wide screens though!
- [ ] Bad category slug in url
- [ ] Bad review_id in url

## Code

- [x] Move all components to `components` directory
- [ ] Could you extract out logic and UI for voting into it's own component and reuse it for reviews and comments?
- [x] Remove any `console.log`s / comments
- [ ] Make sure each call to `useEffect` has relevant dependencies in dependency list
- [ ] Try to "DRY" up any repeated code. These functions appear to do the same thing / almost the same thing:

```js
const handleUsernameChange = (event) => {
  setDetails({ ...details, username: event.target.value });
};

const handlePasswordChange = (event) => {
  setDetails({ ...details, password: event.target.value });
};
```

```js
const handleLikeClick = () => {
  setLoading(true);
  setLikes((currLikes) => {
    return currLikes + 1;
  });
  patchReviewLikes(reviewId, 1)
    .then((res) => {
      setLoading(false);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};

const handleDislikeCLick = () => {
  setLoading(true);
  setLikes((currLikes) => {
    return currLikes - 1;
  });
  patchReviewLikes(reviewId, -1)
    .then((res) => {
      setLoading(false);
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
};
```

- [ ] Shouldn't need to call `event.preventDefault()` on button clicks
