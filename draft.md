## Abstract 

Much of model-based reinforcement learning involves learning a model of an agent's world, and training an agent to leverage this model to perform a task more efficiently. While these models are demonstrably useful for agents, every naturally occurring model of the world of which we are aware--e.g., a brain--arose as the byproduct of competing evolutionary pressures for survival, not minimization of a supervised forward-predictive loss via gradient descent.  That useful models can arise out of the messy and slow optimization process of evolution suggests that forward-predictive modeling can arise as a side-effect of optimization under the right circumstances. Crucially, this optimization process need not explicitly be a forward-predictive loss. In this work, we introduce a modification to traditional reinforcement learning which we call *observational dropout*, whereby we limit the agents ability to observe the real environment at each timestep. In doing so, we can coerce an agent into *learning* a world model to fill in the observation gaps during reinforcement learning. We show that the emerged world model, while not explicitly trained to predict the future, can help the agent learn key skills required to perform well in its environment.

______

## Introduction

Remember to cite REINFORCE paper <dt-cite key="williams1992simple"></dt-cite>.

*If you would like to discuss any issues or give feedback, please visit the [GitHub](https://github.com/weightagnostic/weightagnostic.github.io/issues) repository of this page for more information.*