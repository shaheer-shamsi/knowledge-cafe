import React from 'react';

const Questions = () => {
    return (
        <div className='pt-10'>
                  <div className='text-xl font-semibold py-10 border p-5 space-y-2'>
        <h1 className='text-2xl pb-3 text-slate-800'>Questions?</h1>
      <details className='space-y-2'>
        <summary>What is the difference between Props and State?</summary>
        <p className='text-slate-700'>The main difference between props and state is that props is immutable and read only. State changes can be asynchronous. State can be modified.</p>
      </details>
      <details>
        <summary>How does useState work?</summary>
        <p className='text-slate-700'>UseState is a hook in react. It allow us to add state functional components. It returns an array with two values 1. The current state and function to update it.</p>
      </details>
      <details>
        <summary>What does useEffect do in react?</summary>
        <p className='text-slate-700'>UseEffect fetch data from Api , setting up event listener , manipulating the DOM </p>
      </details>
      <details>
        <summary>How does react work?</summary>
        <p className='text-slate-700'>React works by using a virtual representation of the actual web page, called the virtual DOM, React compares the new virtual DOM tree with the previous virtual DOM tree to determine which parts of the actual DOM need to be updated. This process is called "reconciliation".</p>
      </details>
      </div>
        </div>
    );
};

export default Questions;
