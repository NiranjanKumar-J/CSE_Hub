---
title: Activation Function and Its Types

description: An exam-ready guide to activation functions in neural networks, covering their definition, need, mathematical formula, and seven major types. Binary Step, Linear, Sigmoid, Tanh, ReLU, Leaky ReLU, and Softmax, including formulas, output ranges, characteristics, graphs, applications, and a Softmax example.
---

# Activation Function and Its Types

**CCS355 — Neural Networks and Deep Learning | 8 Marks**

## Definition

An activation function is a mathematical function applied to the output of a neuron.

It determines whether a neuron should be activated and introduces non-linearity into the neural network, enabling it to learn complex patterns.

## Formula

```text
        n
y = f( Σ wᵢxᵢ + b )
       i=1
```

where:

- `xᵢ = Input`
- `wᵢ = Weight`
- `b = Bias`
- `f = Activation function`
- `y = Output`

## Need for Activation Function

- Introduces non-linearity into the network.
- Helps the network learn complex relationships.
- Controls the output of neurons.
- Enables deep neural networks to solve classification and regression problems.
- Improves learning efficiency during training.

## Types of Activation Functions

### 1. Binary Step Function

#### Formula

```text
f(z) = 1,  z ≥ 0
       0,  z < 0
```

**Output Range:** 0 or 1

#### Points

- Produces only two output values: 0 or 1.
- Mainly used in single-layer perceptrons for binary decisions.
- Very simple and computationally efficient.
- Not differentiable, so it cannot be used in backpropagation.
- Rarely used in modern deep learning because it cannot learn complex patterns.

### 2. Linear Activation Function

#### Formula

```text
f(z) = z
```

**Output Range:** −∞ to +∞

#### Points

- The output is directly proportional to the input.
- Does not introduce non-linearity into the network.
- Easy to implement and compute.
- Mostly used in the output layer of regression models.
- Not suitable for hidden layers because it cannot learn complex relationships.

### 3. Sigmoid Activation Function

#### Formula

```text
        1
f(z) = -----
       1 + e⁻ᶻ
```

**Output Range:** 0 to 1

#### Points

- Produces values between 0 and 1, making it suitable for probability estimation.
- Smooth and differentiable, which supports gradient-based learning.
- Commonly used in binary classification problems.
- Suffers from the vanishing gradient problem, slowing down learning in deep networks.
- Less commonly used in hidden layers of modern neural networks.

### 4. Tanh (Hyperbolic Tangent) Function

#### Formula

```text
       eᶻ − e⁻ᶻ
f(z) = ----------
       eᶻ + e⁻ᶻ
```

**Output Range:** −1 to +1

#### Points

- Produces outputs between −1 and +1.
- Zero-centered output helps faster convergence during training.
- Provides stronger gradients than the sigmoid function.
- Still suffers from the vanishing gradient problem in deep networks.
- Frequently used in Recurrent Neural Networks (RNNs) and hidden layers.

### 5. ReLU (Rectified Linear Unit)

#### Formula

```text
f(z) = max(0, z)
```

**Output Range:** 0 to ∞

#### Points

- Outputs 0 for negative values and the input itself for positive values.
- Very fast and computationally efficient.
- Reduces the vanishing gradient problem.
- Most widely used activation function in deep learning hidden layers.
- May suffer from the dying ReLU problem, where some neurons stop learning.

### 6. Leaky ReLU

#### Formula

```text
f(z) = z,       z > 0
       0.01z,   z < 0
```

**Output Range:** −∞ to +∞

#### Points

- A modified version of ReLU.
- Allows a small gradient for negative input values.
- Prevents the dying ReLU problem.
- Improves learning performance in deep neural networks.
- Widely used when ReLU causes inactive neurons.

### 7. Softmax Function

#### Formula

```text
          eᶻⁱ
P(yᵢ) = ---------
         Σⱼ eᶻʲ
```

**Output Range:** 0 to 1, with the sum of all outputs equal to 1.

#### Points

- Converts outputs into probability values.
- The sum of all output probabilities is always 1.
- Used in the output layer for multi-class classification.
- The class with the highest probability is selected as the prediction.
- Commonly used in image classification, speech recognition, and natural language processing.

## Activation Functions — Types and Graphs

The source material includes graphs for:

1. Binary Step Function
2. Linear Function
3. Sigmoid Function
4. Tanh (Hyperbolic Tangent)
5. ReLU Function
6. Leaky ReLU Function
7. Softmax Function

### Softmax Example

For three classes, the output probabilities may be represented as:

```text
Class A   → 0.60
Class B   → 0.20
Class C   → 0.20

Sum = 1.00
```

The class with the highest probability is selected as the prediction.
