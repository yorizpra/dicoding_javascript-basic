// import { test } from 'node:test';
// import assert from 'node:assert';
import { describe, it, expect } from 'bun:test';
import { add } from './support.mjs';

describe('calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
  
    // Action
    const actualValue = add(operandA, operandB);
  
    // Assert
    const expectedValue = 2;
    // assert.equal(actualValue, expectedValue);
    expect(actualValue).toBe(expectedValue)
  });
  
  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;
  
      // Action
      add(operandA, operandB);
    };
  
    // Assert
    // assert.throws(potentialErrorToBeThrew, Error);
    expect(potentialErrorToBeThrew).toThrow(Error);
  });

  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';
 
      // Action
      add(operandA, operandB);
    };
 
    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
})