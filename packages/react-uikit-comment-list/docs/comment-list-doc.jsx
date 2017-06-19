import React from 'react';
import Comment from 'react-uikit-comment';
import CommentList from '../lib/comment-list';

import DocHeader from '../../common-helpers/lib/DocHeader';
import DocExample from '../../common-helpers/lib/DocExample';
import DocFooter from '../../common-helpers/lib/DocFooter';

const name = 'Comment List';
const npmName = 'react-uikit-comment-list';
const summary = 'For lists of comments.';

const basicSnippet = `<CommentList>
  <li>
    <Comment title='Author' meta='12 days ago | Profile | #'
      avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua.
      </p>
    </Comment>
    <CommentList>
      <li>
        <Comment title='Author' meta='12 days ago | Profile | #'
          avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </Comment>
      </li>
    </CommentList>
  </li>
</CommentList>
`;
const basicExample = (
  <CommentList>
    <li>
      <Comment title='Author' meta='12 days ago | Profile | #'
        avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua.
        </p>
      </Comment>
      <CommentList>
        <li>
          <Comment title='Author' meta='12 days ago | Profile | #'
            avatar={{src:'docs/images/placeholder_avatar.svg', alt: 'Avatar placeholder'}}>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </Comment>
        </li>
      </CommentList>
    </li>
  </CommentList>
);

const CommentListDoc = (props) => (
  <div data-markdown-omit-wrapper="true">
    <DocHeader {... { name, npmName, summary }} />
    <DocExample
      name="Basic"
      description="The CommentList component enables the creation of comment lists. It also supports nested comments."
      jsx={basicExample}
      snippet={basicSnippet}
      scroll
    />
    <DocFooter { ...{ name }} />
  </div>
);

export default CommentListDoc;
