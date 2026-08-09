import { TextEncoder, TextDecoder } from 'util';
import { cleanup } from '@testing-library/react';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.scrollTo = jest.fn();
global.fetch = jest.fn();

afterEach(cleanup);
