import React, { useState } from 'react';
import { 
  Cpu, 
  Zap, 
  CheckCircle2, 
  Play, 
  Share2, 
  Clock, 
  Layers, 
  MessageCircle,
  Database,
  Search,
  BarChart3
} from 'lucide-react';
import { PIPELINE_STEPS, type PipelineStep } from '../data/portfolioData';

const stepIcons = [Search, Cpu, Database, MessageCircle, BarChart3];

export const AutomationPipeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationSuccess, setSimulationSuccess] = useState<boolean>(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationSuccess(false);
    
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < PIPELINE_STEPS.length) {
        setActiveStepIndex(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setSimulationSuccess(true);
      }
    }, 650);
  };

  const activeStep = PIPELINE_STEPS[activeStepIndex];
  const isWarmStep = activeStep.spectrum === 'warm';
  const activeColor = isWarmStep ? 'var(--accent-warm)' : 'var(--accent-cool)';
  const activeBadgeClass = isWarmStep ? 'badge-warm' : 'badge-cool';

  return (
    <section id="pipeline" className="py-24 relative bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-neutral text-xs font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5 text-accent-cool" />
              <span>Workflow Architecture</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-theme tracking-tight">
              AI Automation & Marketing Pipeline
            </h2>
            <p className="text-sm sm:text-base text-muted-theme mt-2 max-w-2xl font-normal">
              Autonomous end-to-end infrastructure connecting high-intent search & paid traffic with prompt-driven AI qualification, CRM scoring, and sub-5-second WhatsApp sales notifications.
            </p>
          </div>

          {/* Interactive Live Simulation Trigger */}
          <button
            onClick={handleSimulate}
            disabled={isSimulating}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--accent-cool)] to-[var(--accent-warm)] text-white font-display font-bold text-xs sm:text-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-2.5 shrink-0 self-start md:self-auto disabled:opacity-50 shadow-sm"
          >
            <Play className={`w-4 h-4 ${isSimulating ? 'animate-spin' : 'fill-white'}`} />
            <span>{isSimulating ? 'Processing Live Ingestion...' : 'Simulate Live Lead Flow'}</span>
          </button>
        </div>

        {/* 5-Node Connected Flow Diagram */}
        <div className="relative mb-12">
          
          {/* Flowing Connector Line (Desktop SVG) */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 -translate-y-1/2 h-1 pointer-events-none z-0">
            <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--pipeline-flow-color-1)" />
                  <stop offset="100%" stopColor="var(--pipeline-flow-color-2)" />
                </linearGradient>
              </defs>
              <line 
                x1="0" 
                y1="2" 
                x2="100%" 
                y2="2" 
                stroke="url(#pipelineGrad)" 
                strokeWidth="2" 
                className="animate-pipeline-flow"
              />
            </svg>
          </div>

          {/* 5 Connected Circular Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
            {PIPELINE_STEPS.map((step: PipelineStep, idx: number) => {
              const isCurrent = activeStepIndex === idx;
              const isPassed = activeStepIndex > idx || simulationSuccess;
              const NodeIcon = stepIcons[idx] || Cpu;
              const isWarm = step.spectrum === 'warm';
              const stepBadgeClass = isWarm ? 'badge-warm' : 'badge-cool';
              const stepAccentText = isWarm ? 'text-accent-warm' : 'text-accent-cool';

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 rounded-3xl text-left transition-all relative overflow-hidden flex flex-col justify-between group card-theme ${
                    isCurrent
                      ? 'ring-2 ring-[var(--accent-cool)] shadow-md'
                      : isPassed
                      ? 'border-theme'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Node Header & Icon Circle */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono-data text-[11px] font-bold text-subtle-theme">
                        STAGE {step.stepNumber}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${stepBadgeClass}`}>
                        {step.badge}
                      </span>
                    </div>

                    {/* Circular Node Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${stepBadgeClass}`}>
                        <NodeIcon className="w-5 h-5 font-bold" />
                      </div>
                      <h3 className="font-display text-xs font-bold text-primary-theme leading-snug line-clamp-2">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Node Footer Stats */}
                  <div className="pt-3 border-t border-theme mt-2 flex items-center justify-between text-[11px]">
                    <span className={`font-bold ${stepAccentText}`}>
                      {step.metrics}
                    </span>
                    <span className="text-subtle-theme font-mono-data">{step.latency}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Node Deep Dive Canvas */}
        <div className="card-theme p-7 sm:p-10 rounded-3xl relative overflow-hidden">
          
          {simulationSuccess && (
            <div className="mb-6 p-4 rounded-2xl badge-warm font-bold flex items-center justify-between text-xs animate-pulse">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Pipeline Simulation Finished: Lead verified, enriched, synchronized to CRM & WhatsApp triggered in 1.8 seconds!
              </span>
              <button 
                onClick={() => setSimulationSuccess(false)}
                className="underline hover:opacity-80"
              >
                Dismiss
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage Info */}
            <div className="lg:col-span-6 space-y-4">
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${isWarmStep ? 'text-accent-warm' : 'text-accent-cool'}`}>
                <Layers className="w-4 h-4" /> Stage {activeStep.stepNumber} Execution Architecture
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-theme">
                {activeStep.title}
              </h3>
              <p className="text-sm text-muted-theme leading-relaxed font-normal">
                {activeStep.description}
              </p>

              {/* Integrated Tools */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-theme">
                  <Share2 className="w-3.5 h-3.5 text-accent-cool" /> Tool Ecosystem:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-xl bg-surface-alt border border-theme text-xs font-bold text-primary-theme"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverable Output */}
              <div className="p-4 rounded-2xl bg-surface-alt border border-theme flex items-start gap-3 mt-4">
                <div className={`p-2 rounded-xl mt-0.5 shrink-0 ${activeBadgeClass}`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary-theme">Production Deliverable</div>
                  <div className="text-xs text-muted-theme mt-0.5 font-normal">{activeStep.output}</div>
                </div>
              </div>
            </div>

            {/* Real-Time Data Inspector */}
            <div className="lg:col-span-6 bg-surface-inset rounded-3xl p-6 border border-theme font-mono text-xs text-muted-theme shadow-inner overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-theme text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeColor }}></span>
                  <span className="text-primary-theme font-bold font-sans">Pipeline Node Payload</span>
                </div>
                <span className="font-bold" style={{ color: activeColor }}>LATENCY: {activeStep.latency}</span>
              </div>

              <div className="space-y-1.5 text-[11.5px] leading-relaxed overflow-x-auto text-primary-theme/90 font-mono-data">
                <p><span className="text-accent-cool">"stage"</span>: <span className="text-accent-warm">"{activeStep.stepNumber}"</span>,</p>
                <p><span className="text-accent-cool">"node_name"</span>: <span className="text-accent-warm">"{activeStep.title}"</span>,</p>
                <p><span className="text-accent-cool">"engine"</span>: <span className="text-muted-theme">"n8n + Antigravity Workflow"</span>,</p>
                <p><span className="text-accent-cool">"speed_gain"</span>: <span className="text-accent-warm">"+20% Operational Velocity"</span>,</p>
                <p><span className="text-accent-cool">"hours_saved_weekly"</span>: <span className="text-muted-theme">"8+ Hours"</span>,</p>
                <p><span className="text-accent-cool">"crm_status"</span>: <span className="text-accent-cool">"HubSpot / Salesforce Validated"</span>,</p>
                <p><span className="text-accent-cool">"whatsapp_dispatch"</span>: <span className="text-accent-warm">"&lt; 5 Seconds"</span>,</p>
                <p><span className="text-accent-cool">"status"</span>: <span className="text-muted-theme">"200 OK (Autonomous)"</span></p>
              </div>

              <div className="mt-4 pt-3 border-t border-theme flex items-center justify-between text-[11px] font-sans text-subtle-theme">
                <span className="flex items-center gap-1 text-muted-theme">
                  <Clock className="w-3 h-3 text-accent-cool" /> Zero Lead Leakage
                </span>
                <span className="font-semibold" style={{ color: activeColor }}>Production Validated</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
