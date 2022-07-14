import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CommonButton from "../components/Button/CommonButton";

configure({ adapter: new Adapter() });
describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();
    const button = shallow(
      <CommonButton onClick={mockCallBack}>Ok!</CommonButton>
    );
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
