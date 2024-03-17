// // setupTests.js
// import fetch from 'node-fetch';
// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';

// global.fetch = fetch;

// jest.mock('node-fetch', () => ({
//     __esModule: true, // this property makes it work
//     default: jest.fn(() =>
//         Promise.resolve({
//             json: () => Promise.resolve({ data: 'mocked data' }),
//         })
//     ),
// }));

// setupTests.js
// import fetch from 'node-fetch';
// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom';

// global.fetch = fetch;

// jest.mock('node-fetch', () => ({
//     __esModule: true, // this property makes it work
//     default: jest.fn(() =>
//         Promise.resolve({
//             json: () => Promise.resolve({ data: 'mocked data' }),
//         })
//     ),
// }));

// setupTests.js
import fetch from 'node-fetch';
import '@testing-library/jest-dom';

global.fetch = fetch;

jest.mock('node-fetch', () => ({
    __esModule: true,
    default: jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ data: 'mocked data' }),
        })
    ),
}));