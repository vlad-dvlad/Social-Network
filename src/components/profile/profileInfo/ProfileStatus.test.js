import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus component", () => {

    // status
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Yo Yo Hi" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Yo Yo Hi");
    });

    // span
    test("after creation <span /> should be displayed", () => {
        const component = create(<ProfileStatus status="Yo Yo Hi" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <span /> should contains correct status", () => {
        const component = create(<ProfileStatus status="Yo Yo Hi" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Yo Yo Hi");
    });

    // input
    test("after creation <input /> should be displayed", () => {
        const component = create(<ProfileStatus status="Yo Yo Hi" />);
        const root = component.root;

        expect(() => {
            root.findByType("input");
        }).toThrow();
    });

    test("<input /> should be displayed in Edit Mode instead of <span />", () => {
        const component = create(<ProfileStatus status="Yo Yo Hi" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();

        let input = root.findByType("input");
        expect(input.props.value).toBe("Yo Yo Hi");
    });

    // callback
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"Yo Yo Hi"} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});