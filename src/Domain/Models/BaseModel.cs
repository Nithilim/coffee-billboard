using System;

namespace Domain
{
    public abstract class BaseModel
    {
        public Guid Id { get; }

        public BaseModel()
        {
            Id = Guid.NewGuid();
        }
    }
}
