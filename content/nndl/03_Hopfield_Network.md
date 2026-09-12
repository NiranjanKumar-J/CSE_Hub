# Hopfield Network

## 1. Introduction

The Hopfield Neural Network was proposed by John J. Hopfield in 1982. It is an auto-associative, fully interconnected, single-layer feedback neural network.

The network has symmetric weights:

```text
Wᵢⱼ = Wⱼᵢ
```

There is no self-connection between a neuron and itself:

```text
Wᵢᵢ = 0
```

Hopfield networks are mainly used for auto-association, pattern recall and optimization problems.

## Types of Hopfield Network

1. Discrete Hopfield Network
2. Continuous Hopfield Network

## 2. Discrete Hopfield Network

When a Hopfield network operates in a discrete manner, it is called a **Discrete Hopfield Network**.

The network accepts two-valued inputs:

- Binary: `0, 1`
- Bipolar: `+1, -1`

Generally, bipolar representation is preferred because it makes the analysis easier.

### Architecture of Discrete Hopfield Network

The Hopfield model consists of several processing elements or neurons.

- Each neuron is connected to every other neuron.
- The output of each neuron is fed back to the inputs of other neurons.
- A neuron is not connected to itself.
- The connection weights are symmetric.

```text
Wᵢⱼ = Wⱼᵢ
Wᵢᵢ = 0
```

## 3. Training Algorithm of Discrete Hopfield Network

During training, the weights are calculated and updated to store the input patterns.

Let the input patterns be denoted by:

```text
s^(p),  p = 1, 2, ..., P
```

where `P` represents the number of patterns to be stored.

For bipolar input patterns, the weight matrix is calculated as:

```text
       P
Wᵢⱼ = Σ sᵢ^(p) sⱼ^(p)
       p=1
```

The diagonal elements are set to zero:

```text
Wᵢᵢ = 0
```

### Training Steps

1. Select the patterns to be stored.
2. Represent the input patterns in binary or bipolar form.
3. Calculate the weights between neurons.
4. Add the weight contribution from all stored patterns.
5. Set the self-connection weights to zero.
6. Store the calculated weight matrix in the network.

When an incomplete or noisy pattern is given as input, the network updates its neurons and finally recalls the stored pattern that is closest to the input.

## 4. Continuous Hopfield Network

In a Continuous Hopfield Network, time is considered as a continuous variable.

Unlike the discrete network, the neurons produce continuous or graded outputs instead of only two states.

Let:

- `uᵢ` = internal activity of neuron i
- `vᵢ` = output of neuron i

The output is represented as:

```text
vᵢ = g(uᵢ)
```

where `g(uᵢ)` is a continuous activation function.

### Features

- Time is continuous.
- The neuron output is continuous and graded.
- The network can be used for associative memory.
- It can also solve optimization problems.
- An important application is the Travelling Salesman Problem (TSP).
- The energy of the network decreases continuously with time.

## 5. Energy Function

An important feature of the Hopfield network is the **Energy Function**.

The energy function determines whether the network reaches a stable state.

For a Hopfield network, the energy decreases or remains unchanged after every update.

The energy function for the discrete Hopfield network is commonly written as:

```text
E = -1/2 Σᵢ Σⱼ Wᵢⱼ vᵢ vⱼ - Σᵢ θᵢ vᵢ
```

where:

- `E` = Energy of the network
- `Wᵢⱼ` = Weight between neurons i and j
- `vᵢ, vⱼ` = Outputs of neurons
- `θᵢ` = Threshold of neuron i

During updating:

```text
E(t + 1) ≤ E(t)
```

Thus, the energy continuously decreases or remains constant until the network reaches a minimum energy state.

At this point, the network reaches a stable configuration and no further changes occur.

## 6. Applications of Hopfield Network

Hopfield networks are used in:

- Associative memory
- Pattern recognition
- Pattern completion
- Restoration of noisy patterns
- Image processing
- Optimization problems
- Travelling Salesman Problem
