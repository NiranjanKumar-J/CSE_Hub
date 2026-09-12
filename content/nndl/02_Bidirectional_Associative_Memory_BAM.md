---
title: Bidirectional Associative Memory (BAM)

description: An exam-ready guide to Bidirectional Associative Memory (BAM), covering its architecture, bidirectional operation, working process, Hebbian learning rule, key characteristics, limitations, and applications in associative memory and pattern recognition.
---

# Bidirectional Associative Memory (BAM)

## 1. Introduction

Bidirectional Associative Memory (BAM) is a recurrent hetero-associative neural network proposed by Bart Kosko in 1988.

- BAM performs forward and backward associative searches.
- It associates patterns from Set A with Set B and vice versa.
- It can receive input from either of its two layers.
- It can store binary or bipolar patterns.
- The network uses the Hebbian learning rule for determining weights.

## 2. BAM Architecture

BAM consists of two layers of neurons:

- **X-layer** containing n neurons.
- **Y-layer** containing m neurons.

The two layers are connected in both directions.

- X → Y uses weight matrix **W**.
- Y → X uses weight matrix **Wᵀ**.

### Architecture

```text
       X Layer                         Y Layer
   x1   x2   ...   xn          y1   y2   ...   ym
    \    \    \                 /    /    /
     \    \    \---- W --------/    /    /
      \    \                   /    /    /
       --------- Wᵀ ----------
```

### Important Points

1. BAM has two neuron layers.
2. Both layers are connected in forward and backward directions.
3. The weight matrix from X to Y is W.
4. The weight matrix from Y to X is Wᵀ.
5. Signals are passed between the layers until an equilibrium state is reached.

## 3. Working of BAM

### Step 1: Input Pattern

An input pattern is applied to the X-layer.

### Step 2: Forward Association

The signal is sent from X-layer to Y-layer using the weight matrix W.

```text
Y = sgn(XW)
```

### Step 3: Backward Association

The output of Y-layer is sent back to X-layer using Wᵀ.

```text
X = sgn(YWᵀ)
```

### Step 4: Iteration

The signals are repeatedly passed between the two layers.

```text
X → Y → X → Y → ...
```

### Step 5: Equilibrium

The process continues until the neuron states become stable.

### Step 6: Recall

The final stable state represents the associated stored pattern.

Therefore, BAM can recall patterns in both directions:

```text
X → Y
Y → X
```

## 4. Determination of Weights

BAM uses the **Hebbian learning rule**.

Let:

- `x^(p)` = input vector
- `y^(p)` = target vector
- `P` = number of pattern pairs

The weight matrix is given by:

```text
       P
W = Σ x^(p) y^(p)ᵀ
      p=1
```

The reverse weight matrix is:

```text
Wᵀ
```

Thus, the same set of stored associations can be used in both directions.

## 5. Key Characteristics of BAM

### 1. Bidirectional Operation

BAM allows information to flow in both directions between the two layers.

### 2. Hetero-Associative Memory

It associates a pattern from one set with a different corresponding pattern from another set.

### 3. Recurrent Network

The output of one layer is fed back to the other layer, making BAM a recurrent network.

### 4. Binary and Bipolar Patterns

BAM can represent binary and bipolar patterns.

### 5. Hebbian Learning

The weights are determined using the Hebbian learning rule.

### 6. Two-Way Input

Input can be given to either X-layer or Y-layer.

### 7. Equilibrium State

The network repeatedly updates its neurons until a stable state is reached.

### 8. Pattern Recall

It can recall the associated pattern from a given input pattern.

## 6. Limitations of BAM

1. **Limited Storage Capacity** — BAM can store only a limited number of pattern pairs effectively.
2. **Pattern Interference** — When many patterns are stored, they may interfere with each other.
3. **Spurious States** — The network may sometimes settle into an incorrect stable state.
4. **Convergence Problem** — The network may require several iterations to reach the equilibrium state.
5. **Dependence on Weights** — The accuracy of pattern recall depends on the learned weight matrix.

## 7. Applications of BAM

BAM is used in:

- Pattern recognition
- Character recognition
- Image processing
- Pattern classification
- Associative memory
- Error correction
- Pattern matching
