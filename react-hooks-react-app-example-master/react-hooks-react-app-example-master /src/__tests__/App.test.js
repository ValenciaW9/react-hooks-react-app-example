import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import App from "../components/App";

test('should include "Now" in the header instead of a time', () => {
  render(<App />);
  expect(screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))).not.toBeInTheDocument();
  expect(screen.getByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  render(<App />);
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  render(<App />);
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});


test('should include "Now" in the header instead of a time', () => {
  render(
    <App>
      <ExampleComponent />
      <TestComponent />
    </App>
  );
  expect(screen.queryByText(format(new Date(), "MMMM do yyyy, h:mm:ss a"))).not.toBeInTheDocument();
  expect(screen.getByText(/Now/g)).toBeInTheDocument();
});

test("should include the <ExampleComponent />", () => {
  render(
    <App>
      <ExampleComponent />
      <TestComponent />
    </App>
  );
  expect(screen.getByText("Whoa!")).toBeInTheDocument();
});

test("should include the <TestComponent />", () => {
  render(
    <App>
      <ExampleComponent />
      <TestComponent />
    </App>
  );
  expect(screen.getByTitle("time video")).toBeInTheDocument();
});







//     expect(wrapper.find('header').text()).to.include('Now')
//   });

//   it('should include the ExampleComponent', () => {
//     expect(wrapper.text()).to.include('<ExampleComponent />')
//   });

//   it('should include the TestComponent', () => {
//     expect(wrapper.text()).to.include('<TestComponent />')
//   });
// });

