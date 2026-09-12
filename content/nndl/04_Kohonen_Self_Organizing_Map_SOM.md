# Kohonen Self-Organizing Map (SOM)

**CCS355 — Neural Networks and Deep Learning | 13 Marks**

## 1. Introduction

The Kohonen Self-Organizing Map (SOM) is an unsupervised learning neural network proposed by Teuvo Kohonen. It is used to organize and classify input data into different groups based on their similarity.

SOM converts high-dimensional input data into a low-dimensional map, usually a two-dimensional grid.

Similar input patterns are mapped to nearby neurons.

## 2. Architecture of SOM

Kohonen SOM consists of two layers:

1. Input Layer
2. Output/Competitive Layer

### Architecture

```text
Input Layer
  X1  X2  X3 ... Xn
   \   |   |    /
    \  |   |   /
     \ |   | /
  Output / Competitive Layer
   O1  O2  O3 ... Om
```

## 4. SOM Algorithm

### Step 1: Initialize Weights

The weights of all output neurons are initialized with small random values.

Let the input vector be:

```text
X = [x₁, x₂, ..., xₙ]
```

and the weight vector of neuron `j` be:

```text
Wⱼ = [wⱼ₁, wⱼ₂, ..., wⱼₙ]
```

### Step 2: Calculate Distance

The Euclidean distance between the input and each output neuron is calculated.

```text
Dⱼ = √ Σᵢ₌₁ⁿ (xᵢ - wⱼᵢ)²
```

### Step 3: Select Winning Neuron

The neuron having the smallest distance is selected as the winner.

```text
c = arg min Dⱼ
```

where `c` is the **Best Matching Unit (BMU)**.

### Step 4: Update Weights

The weights of the winning neuron and its neighbours are updated using the SOM learning rule:

```text
wᵢⱼ(t+1) = wᵢⱼ(t) + α(t) hⱼ,c(t) [xᵢ - wᵢⱼ(t)]
```

### Step 5: Reduce Learning Rate

The learning rate is gradually reduced during training.

### Step 6: Repeat

The above steps are repeated for many input patterns and training iterations until the map becomes stable.

## 5. Neighbourhood Function

The winning neuron affects not only itself but also the neurons located nearby.

A commonly used neighbourhood function is:

```text
hⱼ,c(t) = exp(-||rⱼ - r𝑐||² / 2σ²(t))
```

Here:

- `r𝑐` is the position of the winning neuron.
- `rⱼ` is the position of the neighbouring neuron.

The influence is maximum for the winning neuron and decreases as the distance from the winner increases.

## 7. Characteristics

- SOM uses unsupervised learning.
- It uses competitive learning.
- No target output is required.
- It identifies similar patterns automatically.
- Similar patterns are placed close to each other.
- It preserves the topological relationship of data.
- It can represent high-dimensional data using a 2-D map.

## 8. Advantages

1. Easy to understand and implement.
2. Does not require labelled training data.
3. Useful for clustering similar data.
4. Reduces the dimensionality of complex data.
5. Provides effective visualization of high-dimensional data.
6. Preserves relationships between similar patterns.
7. Useful for pattern recognition and classification.

## 9. Applications

Kohonen SOM is used in:

- Pattern recognition
- Image classification
- Speech recognition
- Data clustering
- Customer segmentation
- Medical diagnosis
- Fraud detection
- Data visualization
- Market analysis
- Feature extraction
