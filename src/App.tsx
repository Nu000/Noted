import React, {ReactElement, useRef} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './App.css';

function App() {

  return (
      <>
      <aside>
      <h2>All notes</h2>
      <section>
          <article>
              <img src="https://assets.codepen.io/413052/double-diamond.png"/>
                  <h3>Design process</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut nunc pellentesque, suscipit dui vel, consequat dolor.</p>
                  <div>12 minutes ago</div>
          </article>

          <article>
              <h3>Skin tool ideas</h3>
              <p>Vestibulum ut nunc pellentesque, suscipit dui vel, consequat dolor.</p>
              <div>Yesterday</div>
          </article>

          <article>
              <img src="https://assets.codepen.io/413052/yosemite.jpeg"/>
                  <h3>A new set of demos for the website</h3>
                  <p>Donec in imperdiet orci, et malesuada mauris. Aenean euismod quis mauris eu congue. Duis vestibulum elementum varius.</p>
                  <div>2 days ago</div>
          </article>

          <article>
              <h3>Usecase drafts</h3>
              <p>Curabitur ultricies neque non commodo auctor. Quisque vehicula laoreet quam, ut fringilla erat molestie sed. Aenean id arcu ac nunc eleifend ultricies. Donec in imperdiet orci, et malesuada mauris. Aenean euismod quis mauris eu congue. Duis vestibulum elementum varius.</p>
              <div>2 days ago</div>
          </article>

          <article>
              <h3>Checkin meeting notes</h3>
              <p>In cursus, lorem vitae finibus maximus, nunc arcu porttitor ligula, at sagittis tellus leo at sem.</p>
              <div>Last week</div>
          </article>

          <article>
              <img src="https://assets.codepen.io/413052/logo.png"/>
                  <h3>All hands</h3>
                  <p>Nulla viverra ipsum nec ante imperdiet sagittis. Vivamus lacinia eros ac arcu eleifend luctus. Nulla congue pulvinar diam ut elementum.</p>
                  <div>Last month</div>
          </article>

          <article>
              <h3>Tinyverse Bar Design</h3>
              <p>Lacinia eros ac arcu eleifend luctus. Nulla congue pulvinar diam ut elementum.</p>
              <div>Last month</div>
          </article>

          <article>
              <h3>Orientation</h3>
              <p>Vivamus lacinia eros ac arcu eleifend luctus. Nulla congue pulvinar diam ut elementum.</p>
              <div>Last month</div>
          </article>
      </section>
      </aside>
          <div className="App-header">
              <h1>Noted!</h1>
        <Editor
            initialValue="<p>Type your note here...</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
        />
      </div>
      </>
  );
}

export default App;
